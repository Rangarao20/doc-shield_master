import { Component, OnInit, ViewChild } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/data.service';
import { DocdetailsComponent } from 'src/app/shared-dialogs/docdetailspopoup/docdetails/docdetails.component';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { environment } from 'src/environment';

@Component({
  selector: 'app-issuedoc',
  templateUrl: './issuedoc.component.html',
  styleUrls: ['./issuedoc.component.scss'],
})


export class IssuedocComponent implements OnInit
{
  form!: FormGroup;
  format: any;
  selectedOption = 'All Items';
  displayedColumns = [
    'position',
    'name',
    'weight',
    'symbol',
    'View',
    'details',
  ];
  dataSource = [
    {
      status: 'All',
    },
    {
      status: 'Approved',
    },
    {
      status: 'Rejected',
    },
    {
      status: 'Awaiting Approval',
    },
  ];
  searchText: string = '';
  filteredItems: any;
  filteredItems1: any;
  uesr: any;
  pageSize = 5;
  base64StringWithoutPrefix: any;
  constructor(
    private data: DataService,
    private route: ActivatedRoute,
    public dialog: MatDialog
  ) {}

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  // paginator1!: MatPaginator

  ngAfterViewInit() {
    this.filteredItems1.paginator = this.paginator;
    this.pageSize = 5;
  }

  ngOnInit()
  {
      this.getissuedoc();
  }
  onSearchTextChange() {
    this.filteredItems = this.dataSource.filter((item: any) =>
      item.name.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }

  downloadFile(base64String: string, fileName: string) {
    if (base64String.startsWith('data:application/pdf;base64,')) {
      this.format = 'application/octet-stream';
      this.base64StringWithoutPrefix = base64String.replace(
        'data:application/pdf;base64,',
        ''
      );
    } else if (base64String.startsWith('data:image/png;base64,')) {
      this.format = 'image/png';
      this.base64StringWithoutPrefix = base64String.replace(
        'data:image/png;base64,',
        ''
      );
    }
    console.log(base64String);
    const byteCharacters = atob(this.base64StringWithoutPrefix);
    const byteArrays = [];
    for (let offset = 0; offset < byteCharacters.length; offset += 512) {
      const slice = byteCharacters.slice(offset, offset + 512);
      const byteNumbers = new Array(slice.length);
      for (let i = 0; i < slice.length; i++) {
        byteNumbers[i] = slice.charCodeAt(i);
      }
      const byteArray = new Uint8Array(byteNumbers);
      byteArrays.push(byteArray);
    }
    const blob = new Blob(byteArrays, { type: this.format });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.style.display = 'none';
    a.href = url;
    a.download = this.format;
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
  }
  details(doc_det: any) {
    const mdConfig = new MatDialogConfig();
    mdConfig.width = 'auto';
    mdConfig.height = 'auto';
    mdConfig.position = { right: '25px', top: '5vw' };
    mdConfig.data = doc_det;
    this.dialog.open(DocdetailsComponent, mdConfig);
    console.log('opened issue document');
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.filteredItems.filter = filterValue.trim().toLowerCase();
  }
  statusChange(event: any)
  {
    var temp = [];
    if (event == 'All') {
      this.filteredItems1 = new MatTableDataSource<any>(this.filteredItems);
    }
     else if (event == 'Approved') {
      for (var i = 0; i < this.filteredItems.length; i++) {
        if (
          this.filteredItems[i].status != 1 &&
          this.filteredItems[i].status != 3
        ) {
          temp.push(this.filteredItems[i]);
        }
        this.filteredItems1 = new MatTableDataSource<any>(temp);
      }
    }
  }
  getissuedoc()
  {
    this.route.params.subscribe((params) => {
      const id = params['id'];
    });
    let url = environment.api + '/issue';
    // let url = 'https://docshield-docshield-offchain.apps.ocpdev.aramco.com.sa/issue';
    this.data.isssued_doc(url).subscribe((data) => {
      console.log(data);
      this.filteredItems = data;
      this.filteredItems1 = this.filteredItems;
      this.filteredItems1 = new MatTableDataSource<any>(this.filteredItems);
    });
  }
}
