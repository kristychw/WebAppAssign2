import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-business-contacts',
  templateUrl: './business-contacts.component.html',
  styleUrls: ['./business-contacts.component.css'],
})
export class BusinessContactsComponent implements OnInit {
  contacts: any[] = []; // Initialize with an empty array

  private apiUrl = 'https://web-app-assign2-backend.vercel.app/contacts'; // Update with your server's URL
  // private apiUrl = 'http://localhost:4000/contacts'; // Update with your server's URL

  constructor(
    private http: HttpClient,
    private router: Router,
    private location: Location,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.loadContacts();
  }

  loadContacts() {
    this.http.get<any[]>(this.apiUrl).subscribe(
      (data: any[]) => {
        this.contacts = data;
      },
      (error) => {
        console.error('Error occurred while fetching contacts:', error);
      }
    );
  }

  updateContact(contactId: string) {
    console.log('Updating contact', contactId);
    this.router.navigate(['contacts/update', contactId]);
  }

  deleteContact(contactId: string) {
    const deleteUrl = `${this.apiUrl}/${contactId}`;
    this.http.delete(deleteUrl).subscribe(
      () => {
        // Remove the deleted contact from the local contacts array
        this.contacts = this.contacts.filter(
          (contact) => contact.id !== contactId
        );
        // Reload the page
        window.location.reload();
      },
      (error) => {
        console.error('Error occurred while deleting contact:', error);
      }
    );
  }

  logout() {
    this.authService.logout(); // Remove login information from local storage
    this.router.navigate(['login']);
  }
}
