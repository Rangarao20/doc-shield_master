import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

import { Component } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { DocdetailsComponent } from 'src/app/shared-dialogs/docdetailspopoup/docdetails/docdetails.component';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-receiver-home',
  templateUrl: './receiver-home.component.html',
  styleUrls: ['./receiver-home.component.scss'],
})
export class ReceiverHomeComponent {
  form!: FormGroup;
  displayedColumns = ['Document_Id', 'Issued_To', 'Document_Details', 'Status', 'View_Document', 'Details'];
  dataSource: any;
  searchText: string = '';
  filteredItems: any;
  base64StringWithoutPrefix: any;
  format: string = '';
  constructor(private data: DataService, public dialog: MatDialog) {}
  ngOnInit() {
    let url = 'https://docshield-docshield-offchain.apps.ocpdev.aramco.com.sa/issue/approved';

    this.data.approved_doc(url).subscribe((data) => {
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
