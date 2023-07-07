import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-update-contact',
  templateUrl: './update-contact.component.html',
  styleUrls: ['./update-contact.component.css'],
})
export class UpdateContactComponent implements OnInit {
  contact: any = {};

  // private apiUrl = 'http://localhost:4000/contacts'; // Update with your server's URL
  private apiUrl = 'https://web-app-assign2-backend.vercel.app/contacts'; // Update with your server's URL

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit() {
    const contactId = this.route.snapshot.paramMap.get('id');
    console.log(contactId);
    if (contactId) {
      this.loadContact(contactId);
    } else {
      console.error('Invalid contact ID');
    }
  }

  loadContact(contactId: string) {
    const getContactUrl = `${this.apiUrl}/${contactId}`;
    console.log(getContactUrl);
    this.http.get<any[]>(getContactUrl).subscribe(
      (data: any[]) => {
        this.contact = data;
      },
      (error) => {
        console.error('Error occurred while fetching contact:', error);
      }
    );
  }

  updateContact() {
    const updateUrl = `${this.apiUrl}/${this.contact._id}`;
    this.http.put(updateUrl, this.contact).subscribe(
      () => {
        console.log('Contact updated successfully');
        // Redirect to the contacts list view or show a success message
        this.router.navigate(['/businessContact']);
      },
      (error) => {
        console.error('Error occurred while updating contact:', error);
        // Handle the error and show an error message
      }
    );
  }

  deleteContact() {
    const deleteUrl = `${this.apiUrl}/${this.contact._id}`;
    this.http.delete(deleteUrl).subscribe(
      () => {
        console.log('Contact deleted successfully');
        // Redirect to the contacts list view or show a success message
        this.router.navigate(['/businessContact']);
      },
      (error) => {
        console.error('Error occurred while deleting contact:', error);
        // Handle the error and show an error message
      }
    );
  }

  cancelUpdate() {
    // Redirect to the contacts list view or any other desired page
    this.router.navigate(['/businessContact']);
  }
}
