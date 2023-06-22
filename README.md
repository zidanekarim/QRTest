# QRTest

A simple web app designed to scan QR codes from a website. This was developed in mind of scanning tickets for Stuyvesant High School's Senior Prom

## Installation

Clone the repository and start the server with node. 

```bash
git@github.com:ThePotatoPowers/QRTest.git
node index.js
```

## Usage

Add your database in an `.env` file. This app uses MongoDB. 

The format for the database is `{email, paid, code}`. You match the `code` from the QR code against the backend of the database.

Look into [the other part of this project](https://github.com/ThePotatoPowers/QRPromTicket) for instructions on how to create these codes.  

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[ISC](https://opensource.org/license/isc-license-txt/)

## Dependencies

- body-parser
- dotenv
- express
- mongoose