## API Usage

**Login**
----
Login to the system

<details>

* **URL**

    /login

* **Method:**

    `POST`

* **Headers:**

    `'Content-Type': 'application/json'`

*  **URL Params**

    None

* **Query Params**

    None

* **Data Params**

    ```typescript
      {
        username: string,
        password: string
      }
    ```

* **Success Response:**

  * **Code:** 200 CREATED <br />
    **Content:** 
    ```json
      {
        "username": "depp",
      }
    ```

</details>

**Register Client**
----
Creates client

<details>

* **URL**

    /clients/register

* **Method:**

    `POST`

* **Headers:**

    `'Content-Type': 'application/json'`

*  **URL Params**

    None

* **Query Params**

    None

* **Data Params**

    ```typescript
      {
        username: string,
        name: string,
        password: string,
        mail: string,
      }
    ```

* **Success Response:**

  * **Code:** 201 CREATED <br />
    **Content:** 
    ```json
        {
            "username": "kirixczxzcASDASDAxcS2l",
            "name": "test",
            "password": "321",
            "mail": "cxzxcv@g.ru"
        }
    ```

</details>

**Register Doctor**
----
Creates doctor

<details>

* **URL**

    /doctors/register

* **Method:**

    `POST`

* **Headers:**

    `'Content-Type': 'application/json'`

*  **URL Params**

    None

* **Query Params**

    None

* **Data Params**

    ```typescript
      {
        username: string,
        name: string,
        surname: string,
        image: string,
        specialization: string
        password: string,
        mail: string,
      }
    ```

* **Success Response:**

  * **Code:** 201 CREATED <br />
    **Content:** 
    ```json
        {
            "name": "Gosha0934",
            "surname": "Killer",
            "image": "http://stub/img.jpg",
            "username": "qwercxztyu",
            "mail": "asdad@rsad.ru",
            "password": "345",
            "specialization": "63e031a1d18668d2ff96d29e",
            "_id": "63fe951972ea164f1d87a3d5"
        }
    ```

</details>

**Register Admin**
----
Creates doctor

<details>

* **URL**

    /admins/register

* **Method:**

    `POST`

* **Headers:**

    `'Content-Type': 'application/json'`

*  **URL Params**

    None

* **Query Params**

    None

* **Data Params**

    ```typescript
      {
        username: string,
        password: string,
        mail: string,
      }
    ```

* **Success Response:**

  * **Code:** 201 CREATED <br />
    **Content:** 
    ```json
        {
            "username": "moderator2",
            "mail": "asdad@rsad.ru",
            "password": "345",
            "_id": "63fe958072ea164f1d87a3d9"
        }
    ```

</details>

GET

**Get client**
----
Get client by id

<details>

* **URL**

    /clients/:id

* **Method:**

    `GET`


* **Success Response:**

  * **Code:** 200 OK <br />
    **Content:** 
    ```json
      {
          "_id": "63e0216df22538de5e0bb105",
          "name": "valera",
          "username": "depp",
          "mail": "qewt",
          "password": "123",
          "__v": 0
      }
    ```

</details>

**Delete client**
----
Delete client by id

<details>

* **URL**

    /clients/:id

* **Method:**

    `DELETE`


* **Success Response:**

  * **Code:** 200 OK <br />

</details>

**Update Client**
----
Updates client

<details>

* **URL**

    /clients/update/:id

* **Method:**

    `PUT`

* **Headers:**

    `'Content-Type': 'application/json'`

* **Data Params**

    ```typescript
      {
        _id: string,
        username?: string,
        password?: string,
        mail?: string,
        name?: string,
      }
    ```

* **Success Response:**

  * **Code:** 200 CREATED <br />

</details>

**Get doctors**
----
Get all doctors

<details>

* **GET**

    /doctors/

* **Method:**

    `GET`


* **Success Response:**

  * **Code:** 200 OK <br />
  **Content:**           
    [
        {
            "_id": "63e55087c08711ad99f6fdff",
            "name": "Gosha",
            "surname": "Killer",
            "image": "https://avatars.dicebear.com/api/personas/n13l5g.svg",
            "username": "doccxxcxccxxcxzxccx",
            "mail": "asdad@rsad.ru",
            "password": "345",
            "specialization": "63e031a1d18668d2ff96d29e",
            "__v": 0
        },
        {
            "_id": "63e62fa6c08711ad99f6fef4",
            "name": "Vasya",
            "surname": "Pyatkin",
            "image": "https://avatars.dicebear.com/api/personas/mfktni.svg",
            "username": "newsupadoc",
            "mail": "mymail@mail.ru",
            "password": "2654",
            "specialization": "63e031a1d18668d2ff96d29e",
            "__v": 0
        },
        ...
    ]   

</details>

**Delete doctor**
----
Delete doctor by id

<details>

* **DELETE**

    /doctors/delete/:id

* **Method:**

    `DELETE`


* **Success Response:**

  * **Code:** 200 OK <br />

</details>

**Update Doctor**
----
Updates doctor by id

<details>

* **URL**

    /doctors/update/:id

* **Method:**

    `PUT`

* **Headers:**

    `'Content-Type': 'application/json'`

* **Data Params**

    ```typescript
      {
        _id: string,
        username?: string,
        password?: string,
        mail?: string,
        name?: string,
        surname?: string,
        image?: string,
        specialization?: string,
      }
    ```

* **Success Response:**

  * **Code:** 200 CREATED <br />

</details>

**Create Specialization**
----
Creates Specialization

<details>

* **URL**

    /specializations/create

* **Method:**

    `POST`

* **Headers:**

    `'Content-Type': 'application/json'`

* **Data Params**

    ```typescript
      {
        name: string,
      }
    ```

* **Success Response:**

  * **Code:** 200 CREATED <br />
  **Content:**           
    {
        "name": "cxczx",
        "_id": "63fe980672ea164f1d87a3e5"
    }

</details>

**Get specializations**
----
Get all specializations

<details>

* **URL**

    /specializations/

* **Method:**

    `GET`


* **Success Response:**

  * **Code:** 200 OK <br />
  **Content:**           
    [
      {
          "_id": "63e02f5ea5c1a9734570f37b",
          "name": "teRapist",
          "__v": 0
      },
      {
          "_id": "63e02f69a5c1a9734570f37d",
          "name": "Optometrist",
          "__v": 0
      },
      ...
    ]

</details>

**Update Specialization**
----
Updates Specialization

<details>

* **URL**

    /specializations/update/:id

* **Method:**

    `PUT`

* **Headers:**

    `'Content-Type': 'application/json'`

* **Data Params**

    ```typescript
      {
        name: string,
      }
    ```

* **Success Response:**

  * **Code:** 200 CREATED <br />

</details>

**Delete specialization**
----
Get all specializations

<details>

* **URL**

    /specializations/delete/:id

* **Method:**

    `DELETE`


* **Success Response:**

  * **Code:** 200 OK <br />

</details>

**Create Session**
----
Creates session

<details>

* **URL**

    /sessions/create

* **Method:**

    `POST`

* **Headers:**

    `'Content-Type': 'application/json'`

* **Data Params**

    ```typescript
      {
        doctorId: string,
        clientId: string,
        date: string,
      }
    ```

* **Success Response:**

  * **Code:** 200 CREATED <br />
  **Content:**           
    {
        "doctorId": "63e03621acd88441d187f614",
        "clientId": "63dffd4fb7d62cbcc1a72694",
        "date": "2023-02-12T17:30:00.000Z",
        "_id": "63fe994072ea164f1d87a3eb"
    }

</details>

**Get sessions**
----
Get all sessions

<details>

* **URL**

    /sessions/

* **Method:**

    `GET`


* **Success Response:**

  * **Code:** 200 OK <br />
  **Content:**           
    [
        {
            "_id": "63f756ad02d282794715e6e8",
            "doctorId": "63e62fa6c08711ad99f6fef4",
            "clientId": "63e8b8847be9a09b03ab942a",
            "date": "2023-02-23T17:00:00.000Z",
            "__v": 0
        },
        {
            "_id": "63f756bf02d282794715e6ea",
            "doctorId": "63e689523a1ec012a10fef9b",
            "clientId": "63e8b8847be9a09b03ab942a",
            "date": "2023-02-23T17:00:00.000Z",
            "__v": 0
        },
        ...
    ]

</details>

**Delete session**
----
Delete session by id

<details>

* **URL**

    /sessions/delete/:id

* **Method:**

    `DELETE`


* **Success Response:**

  * **Code:** 200 OK <br />

</details>
