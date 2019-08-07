import { Component, OnInit, Input } from '@angular/core';
import { element } from 'protractor';
import { strictEqual } from 'assert';


@Component({
  selector: 'app-content-lists',
  templateUrl: './content-lists.component.html',
  styleUrls: ['./content-lists.component.css']
})
export class ContentListsComponent implements OnInit {

  private contents: string[];
  private editcons: string[];
  private isEditable: boolean = false;
  private isDeleteable: boolean = false;

  constructor() { }

  ngOnInit() {
    this.contents = ["example"];
    this.editcons = this.contents;

  }

  addContent(content) {
    this.contents.push(content);
    return false;
  }

  removeContent(content) {
    this.contents.forEach((element, index) => {
      if (element == content) {
        this.contents.splice(index, 1);
      }
    });
  }

  updateContent() {
    for (let i = 0; i < this.contents.length; i++) {
      this.contents.splice(i, 1, this.editcons[i]);
    }
  }

  toggleEdit() {
    this.isEditable =! this.isEditable;
  }

  toggleDelete() {
    this.isDeleteable =! this.isDeleteable;
  }

}
