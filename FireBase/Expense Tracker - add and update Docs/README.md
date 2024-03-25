# Expense Tracker

Expense Tracker is a React-based project designed to help users manage their expenses efficiently. This application allows users to add, delete, and track their expenses effortlessly.

## Features

- Add new expenses with ease.
- Delete existing expenses as needed.
- Calculate profit, loss, and grand total based on the entered expenses.
- Display a list of individual transactions with options to edit and delete.

## Components

1. **App Component**: Main component storing the expenses array and managing functions to add and delete expenses.
2. **ExpenseForm Component**: Renders a form for entering expense details and utilizes `useRef` to manage input field values.
3. **ExpenseInfo Component**: Calculates and displays profit, loss, and grand total based on the entered expenses.
4. **ExpenseList Component**: Lists individual transactions and passes the `deleteExpense` function to the Transaction component.
5. **Transaction Component**: Displays transaction details and options to edit or delete expenses upon hovering.

## Setup

1. Clone the repository.
2. Navigate to the project directory.
3. Run `npm install` to install dependencies.
4. Run `npm start` to start the development server.
5. Open [http://localhost:3000](http://localhost:3000) to view the application in your browser.

## Usage

- To add a new expense, fill out the expense form and submit.
- To delete an expense, hover over the transaction and click the delete option.

## Technologies Used

- React
- JavaScript
- HTML/CSS

## Contributing

Contributions are welcome! If you'd like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature-name`).
3. Make your changes.
4. Commit your changes (`git commit -am 'Add some feature'`).
5. Push to the branch (`git push origin feature/your-feature-name`).
6. Create a new Pull Request.

## License

This project is licensed under the [MIT License](LICENSE).
