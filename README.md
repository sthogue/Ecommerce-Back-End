# E-Commerce Back End

![License](https://img.shields.io/badge/License-MIT-yellow.svg)

## Technologies used
![NPM](https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![MySQL](https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white)
![Sequelize](https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white)
![Insomnia](https://img.shields.io/badge/Insomnia-black?style=for-the-badge&logo=insomnia&logoColor=5849BE)

-------------------------------------------------------------

## Table of Contents

* [Installation](#installation)

* [Usage](#usage)

* [License](#license)

* [Contributions](#contributions)

* [Questions](#questions)

## Installation

To run the application you will need to do the following: 
1. update the `.env.EXAMPLE` file with your username and password. You need to also change the file name to `.env`.
2. Now source the database by:
    - In the terminal run `mysql -u root -p`
    - Sign in with your password
    - Then type `SOURCE db/schema.sql`
      - This will source the database
    - exit the application
3. In the terminal: 
    - run `npm run seed`. The script seeds the database you just sourced.
    - run `npm start`.  The script runs `node server.js`
4. Now open Insomnia and run the application from there.
5. When you are done running the application go into the terminal and close the local host by pressing `command + C`. This applies to both MacOS and Windows users.

### Dependencies
```
"dotenv": "^8.2.0",
"express": "^4.17.1",
"mysql2": "^2.1.0",
"sequelize": "^5.21.7"
```

## Usage

Internet retail, also known as **e-commerce**, plays a significant role within the electronics industry, as it empowers businesses and consumers alike to conveniently engage in online buying and selling of electronic products. In the latest available data from 2021, the industry in the United States alone was estimated to have generated the substantial amount of US$2.54 trillion, according to the United Nations Conference on Trade and Development. E-commerce platforms like Shopify and WooCommerce provide a suite of services to businesses of all sizes. Due to the prevalence of these platforms, developers should understand the fundamental architecture of e-commerce sites.

This app has a working Express.js API to use Sequelize to interact with a MySQL database.

### Acceptance Criteria

```md
GIVEN a functional Express.js API
WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
THEN I am able to connect to a database using Sequelize
WHEN I enter schema and seed commands
THEN a development database is created and is seeded with test data
WHEN I enter the command to invoke the application
THEN my server is started and the Sequelize models are synced to the MySQL database
WHEN I open API GET routes in Insomnia for categories, products, or tags
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete data in my database
```

## License
This application is covered under the MIT License.
[License URL](https://opensource.org/licenses/MIT)

## Contributions

I have GitHub co-pilot installed to help speed up my code and to reduce errors. I also had assistance from a TA.

## Video Of Application
[Link to video of application in use]()
## Application URL
[Link to application URL](https://github.com/sthogue/Ecommerce-Back-End) 

## Questions
View more of my work at
[https://github.com/sthogue](https://github.com/sthogue/)

