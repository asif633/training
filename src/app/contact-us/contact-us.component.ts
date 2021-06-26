import { Component, OnInit } from '@angular/core';

interface Employee {
  firstName: String;
  lastName: String;
  age: String;
}

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

  posts:any[];
  loading: boolean;
  employees: Employee[] = [];

  amount = 100.45;
  today = new Date();

  constructor() { }

  ngOnInit(): void {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
      this.posts = [
        { title: 'First card', description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`},
        { title: 'Second card', description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`},
        { title: 'Third card', description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`},
        { title: 'Fourth card', description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`},
      ];
    }, 4000);

    this.objectMethod();
  }

  objectMethod() {
    
    let f = 0;
    f = 1;

    const employee = {
      firstName: 'Vinay',
      lastName: 'Sharma',
      age: '24 years',
      address: 'Delhi'
    };

    const employee1 = { ...employee, gender: 'Male' };

    employee.firstName;

    const { firstName, ...rest } = employee;

    console.log('Employee: ', firstName, rest, employee1, employee1['firstName'], employee1.firstName);

    this.addEmployee('Pradip', 'Sanwan', '34 years', 'Male');
    this.addEmployee('Viki', 'Sanwan', '36 years', 'Male');
    this.addEmployee('Edmond', '', '34 years', 'Male');
    this.addEmployee('Viki', 'Sanwan', '34 years', 'Male');


    this.addEmployee1( { firstName: 'Tanu', lastName: 'Sharma', age: '20 years'} );
    this.addEmployee1( { firstName: 'Manu', lastName: 'Sharma', age: '20 years'} );
    this.addEmployee1( { firstName: 'Tanusree', lastName: 'Sharma', age: '20 years'} );

    this.addEmployee2( { firstName: 'Sritama', lastName: 'Mukherjee', age: '23 years'} );

    const res:Employee[] = this.filterArrayByName('anu');
    const empIndex:number = this.findIndexByName('Tanu');


    this.employees.slice(0, 2);

    this.employees.splice(empIndex, 1, { firstName: 'Tanu', lastName: 'Sharma', age: '23 years'});


    this.employees.forEach((emp, index) => {
      if (index === 2)
      emp.age = '56 years';
    });

    this.employees.map((emp, index) => {
      if (index === 3)
      emp.age = '40 years';
    });

    const single = this.employees[2];


    const places = ['Delhi', 'Mumbai', 'Bengaluru'];


    const placesString = places.join('; ');


    console.log('Places ', places.join(', '), placesString, placesString.split('; '));
  }

  addEmployee(name, lastName, age, gender = 'Male') {
    this.employees.push({
      firstName: name,
      lastName,
      age
    });
  }

  addEmployee1(employee: Employee) {

    const { firstName, lastName, age } = employee;

    this.employees.push({
      firstName: employee.firstName,
      lastName: employee.lastName,
      age: employee.age
    });

    this.employees.push({
      firstName,
      lastName,
      age
    });
  }


  addEmployee2({ firstName, lastName, age }) {
    this.employees.push({
      firstName,
      lastName,
      age
    });
  }

  filterArrayByName(name) {
    const filtered = this.employees.filter(employee => employee.firstName.includes(name));
    return filtered;
  }

  findIndexByName(name) {
    const index = this.employees.findIndex(employee => employee.firstName === name);
    return index;
  }

}
