# Tip and Consumption Calculator

This is a tip calculator application developed in React + TypeScript that allows users to select products from a menu, calculate the subtotal, and apply a tip based on a selected percentage (10%, 20%, or 30%). The app displays a consumption cart where items can be removed, with the total dynamically updated in real-time.

![App Screenshot](public/image.png)

## Features

### Two main sections:

- A product menu where you can select items to add to your bill.
- A selected products section where you can view and remove chosen items.

### In the selected products section:

- You can individually remove products if desired.
- There is a tip section with three percentage options (10%, 15%, 20%).
- The subtotal, tip amount, and total to pay are displayed.

Calculations update in real-time as you add or remove products or change the tip percentage.
The interface is responsive, adapting to different screen sizes.
Components from shadcn/ui have been used for a consistent and attractive design.
Accessibility practices have been implemented, including semantic labels and alt text for the delete buttons.

## Technologies Used

- **React** + **TypeScript**: For building the interactive interface and static typing.
- **Vite**: For fast and efficient bundling.
- **Tailwind CSS**: For custom styling and responsive design.
- **pnpm**: For efficient dependency management.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/germangambarte/tip-calculator.git
   ```

2. Navigate to the project directory:

   ```bash
   cd tip-calculator
   ```

3. Install dependencies:

   ```bash
   pnpm install
   ```

4. Start the development server:

   ```bash
   pnpm dev
   ```

5. Access the app at [http://localhost:5173](http://localhost:5173).

## Usage

1. Select products from the menu to add them to the cart.
2. Choose the desired tip percentage (10%, 20%, or 50%).
3. View the updated subtotal, tip, and total to pay, which adjust automatically.
4. You can remove items from the cart at any time to update the total.

## Contributions

If you'd like to contribute, please fork the repository, create a new branch with your changes, and submit a pull request.
