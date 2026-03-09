---
title: Issues with entering and verifying your email
translationKey: issuesWithEmail
layout: 'layouts/base.njk'
eleventyNavigation:
  key: issuesWithEmailEn
  title: Issues with entering and verifying your email
  locale: en
  order: 2
  parent: troubleSigningUpEn
  hideMain: true
---

# Problems entering and verifying your email

<ul class="list-disc mb-300">
  <li>{% link '#it-says-your-email-address-is-invalid' 'It says your email address is invalid' %}</li>
  <li>{% link '#you-cannot-find-the-onetime-code-in-your-email-inbox' 'You cannot find the one-time code in your email inbox' %}</li>
  <li>{% link '#it-says-your-code-is-invalid' 'It says the code is invalid' %}</li>
  <li>{% link '#it-says-your-email-is-already-associated-with-a-gc-sign-in-account' 'It says your email address is already associated with a CanadaLogin' %}</li>
</ul>

## It says your email address is invalid

If you're seeing an "invalid email" error, here are a few things to check:

### 1. Double-check for typos

- Make sure there are no extra spaces before or after your email address.
- Confirm that you’ve entered the correct format. For example: name@example.com.

### 2. Some types of email addresses may not be supported

- Some domains (like temporary or disposable emails) may not be allowed.
- Try using a different email provider, such as Gmail or Outlook.

### 3. CanadaLogin might be experiencing issues

- If you’re sure your email is correct, the issue could be on our end. We suggest waiting 24 hours and then trying again.

### 4. Contact support

- If none of these steps work, {% link links.contactUsers 'contact customer support' %} with your issue and tell them what steps you’ve tried already.

## You cannot find the one-time code in your email inbox

If you cannot find the one-time code for CanadaLogin your email inbox, try these troubleshooting steps:

### 1. Check your email address

- Make sure you entered the correct email address with no typos.

### 2. Check your spam or junk folder

- The email might have been flagged as spam. Search for messages from CanadaLogin.

### 3. Search your inbox

- Use the search function in your email to look for "CanadaLogin verification code".

### 4. Wait a few minutes and check again

- Email delivery can sometimes be delayed.
- If you requested multiple codes, only the most recent one will work.

### 5. Check your email filters and rules

- If you use custom filters, the email might be in a different folder.
- If you have an IT-managed email (work or school), check with your IT team to ensure the email isn't blocked.

### 6. Try resending the code

- On the web page, request a new verification code by selecting the “Request a new code” link under “Problems with the code?”. You may have to wait a few seconds for the resend link to appear.

### 7. Contact support

- If none of these steps work, {% link links.contactUsers 'contact customer support' %} with your issue and tell them what steps you’ve tried already.

## It says your code is invalid

If it says your one-time code is invalid, try these troubleshooting steps:

### 1. Make sure you have entered the code correctly

- Codes are 6-digits, double check that you entered or copied it correctly.

### 2. Make sure you have the right code

- If you requested multiple codes, only the newest one-time code you receive will work. If you request
  and receive multiple messages at the same time, you may need to try more than one code until one works.
- If you enter the code incorrectly too many times, you may be temporarily locked out.

## It says your email is already associated with a CanadaLogin

If you have received an error message stating that your email is already associated with a CanadaLogin on
CanadaLogin, here’s what it means and what you can do.

### What it means

Your email address is already linked to a CanadaLogin. This could be because you previously created
a CanadaLogin, or because someone else used or is using your email in error.

### What you can do

#### 1. If you previously created a CanadaLogin, sign in:

- Go to the sign-in page and sign in using the email address you used previously
- If you’ve forgotten your password, use the “Forgot Password” option to reset it.

<gcds-notice type="info" notice-title-tag="h5" notice-title="Related help guides">
   <gcds-text>
      {% linkRef links.forgotyourpassword '#forgot-your-password' 'Forgot your password' %}
   </gcds-text>
   <gcds-text>
      {% linkRef links.problemssigninginwith2stepverification '#Problems-signing-in-with2-step-verification' 'Problems signing in with 2-step verification' %}
   </gcds-text>
</gcds-notice>

#### 2. If you were trying to create a new account:

- Email addresses can only be linked to one CanadaLogin. You will need to use a different
  email address to create a new CanadaLogin.

#### 3. If you think someone may be trying to create a CanadaLogin with your email, we recommend:

- Changing the password on your email account to make sure it’s secure.
- Not leaving your email signed in on shared devices.

  <!-- TO-DO: Fix contact link once we add  customer service number and section -->

#### 4. Contact support

- If you have additional questions or need additional help, {% link links.contactUsers 'contact customer support.' %}
