import { Component, OnInit } from '@angular/core';
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

@Component({
  selector: 'app-issuedoc',
  templateUrl: './issuedoc.component.html',
  styleUrls: ['./issuedoc.component.scss'],
})
export class IssuedocComponent {
  form!: FormGroup;
  format: any;
  displayedColumns = [
    'position',
    'name',
    'weight',
    'symbol',
    'View',
    'details',
  ];
  dataSource: any = [
    {
      position: 1,
      name: 'Vengadassalabady, Dinesh',
      weight:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrudexercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur',
      symbol: 'watch_later',
    },
    {
      position: 2,
      name: 'Venu, Hariharan',
      weight:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrudexercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur',
      symbol: 'watch_later',
    },
    {
      position: 3,
      name: 'Kalaivanan, chidambaram',
      weight:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrudexercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur',
      symbol: 'watch_later',
    },
    {
      position: 4,
      name: 'Vengadassalabady, Dinesh',
      weight:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrudexercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur',
      symbol: 'watch_later',
    },
    {
      position: 5,
      name: 'Vengadassalabady, Dinesh',
      weight:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrudexercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur',
      symbol: 'watch_later',
    },
    {
      position: 6,
      name: 'Vengadassalabady, Dinesh',
      weight:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrudexercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur',
      symbol: 'watch_later',
    },
  ];
  searchText: string = '';
  filteredItems: any;
  uesr: any;
  base64StringWithoutPrefix: any;
  constructor(
    private data: DataService,
    private route: ActivatedRoute,
    public dialog: MatDialog
  ) {}
  ngOnInit() {
    this.route.params.subscribe((params) => {
      const id = params['id']; // Get the value of the 'id' parameter
      // Use the 'id' value as needed
    });
    let url = 'http://localhost:5000/issue';
    this.data.isssued_doc(url).subscribe((data) => {
      console.log(data);
      this.filteredItems = data;
    });
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
    // mdConfig.disableClose = true;
    mdConfig.width = 'auto';
    mdConfig.height = 'auto';
    mdConfig.position = { right: '25px', top: '5vw' };
    mdConfig.data = doc_det;
    this.dialog.open(DocdetailsComponent, mdConfig);
    console.log('opened issue document');
  }
}
