import { ChangeDetectorRef, Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

import { DataService } from 'src/app/data.service';
import { DocdetailsComponent } from 'src/app/shared-dialogs/docdetailspopoup/docdetails/docdetails.component';
import { HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environment';

@Component({
  selector: 'app-signerissue',
  templateUrl: './signerissue.component.html',
  styleUrls: ['./signerissue.component.scss'],
})
export class SignerissueComponent {
  displayedColumns = [
    'document_id',
    'name',
    'document_title',
    'Action',
    'View',
    'details'
  ];

  filteredItems: any;
  base64StringWithoutPrefix: any;
  format: any;

  constructor(private data: DataService, private cd: ChangeDetectorRef, public dialog: MatDialog) {}
  async ngOnInit() {
    let url = environment.api + '/docdet';
    this.data.signer(url).subscribe((response) => {
      console.log(response);
      this.filteredItems = response;
    });
  }

  onSearchTextChange() {
    throw new Error('Method not implemented.');
  }

  approve(element: any, id: any)
  {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const status = 'approve'
    const body = { id,status};
    let b = 'none';
    console.log(id);
    this.data.app(body,headers).subscribe((res) => {
      console.log(res);
    });
    location.reload();
    const index = this.filteredItems.indexOf(element);
    this.filteredItems.splice(index, 1);
    this.cd.detectChanges();
    console.log(this.filteredItems);
  }
  reject(element: any, id:any)
  {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const status = 'reject'
    const body = { id,status};
    let b = 'none';
    console.log(id);
    this.data.app(body,headers).subscribe((res) => {
      console.log(res);
    });
    location.reload();
    const index = this.filteredItems.indexOf(element);
    this.filteredItems.splice(index, 1);
    this.cd.detectChanges();
    console.log(this.filteredItems);
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

  searchText: any;
}
