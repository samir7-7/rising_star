# Contact Form to Google Sheets Setup Guide

## Overview
This setup allows your contact form submissions to automatically appear in a Google Spreadsheet.

## Step 1: Create Google Spreadsheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet
3. Name it "Rising Diamond Contact Form Submissions" (or any name you prefer)

## Step 2: Set up Google Apps Script

1. In your Google Spreadsheet, go to **Extensions > Apps Script**
2. Delete the default code and paste the contents of `google-apps-script.js`
3. Save the project (Ctrl+S or Cmd+S)
4. Name your project (e.g., "Contact Form Handler")

## Step 3: Deploy as Web App

1. Click **Deploy > New deployment**
2. Choose **Web app** as the type
3. Set **Execute as** to "Me"
4. Set **Who has access** to "Anyone"
5. Click **Deploy**
6. **Copy the web app URL** - you'll need this for the next step

## Step 4: Configure Environment Variables

1. Create a `.env.local` file in your project root
2. Add the following line:
   ```
   GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec
   ```
   Replace `YOUR_SCRIPT_ID` with the actual ID from your web app URL

## Step 5: Test the Setup

1. Start your development server: `npm run dev`
2. Go to your contact form
3. Fill out and submit the form
4. Check your Google Spreadsheet - you should see the new entry

## Spreadsheet Columns

The spreadsheet will automatically create these columns:
- **Timestamp**: When the form was submitted
- **Name**: Full name from the form
- **Email**: Email address
- **Country**: Selected country
- **WhatsApp**: WhatsApp number
- **Subject**: Subject line
- **Message**: Message content
- **IP Address**: User's IP address
- **User Agent**: Browser information
- **Status**: Default status (can be updated manually)

## Troubleshooting

### Form submissions not appearing in spreadsheet:
1. Check that the `GOOGLE_SCRIPT_URL` in `.env.local` is correct
2. Verify the Google Apps Script is deployed as a web app with "Anyone" access
3. Check the browser console for any error messages
4. Test the Google Apps Script directly using the test function

### Permission errors:
1. Make sure the Google Apps Script is deployed with "Execute as: Me"
2. Ensure "Who has access" is set to "Anyone"
3. You may need to authorize the script on first run

### API errors:
1. Check the Next.js console for error messages
2. Verify all required fields are being sent
3. Test the API endpoint directly using a tool like Postman

## Security Notes

- The Google Apps Script is set to accept requests from anyone
- Consider adding basic validation or rate limiting if needed
- The spreadsheet will be accessible to anyone with the link
- Consider setting appropriate sharing permissions on your spreadsheet

## Customization

You can modify the Google Apps Script to:
- Add additional validation
- Send email notifications
- Format the data differently
- Add more columns
- Create automated responses

## Production Deployment

When deploying to Vercel:
1. Add the `GOOGLE_SCRIPT_URL` to your Vercel environment variables
2. Make sure the Google Apps Script is deployed and accessible
3. Test the form submission on the live site
