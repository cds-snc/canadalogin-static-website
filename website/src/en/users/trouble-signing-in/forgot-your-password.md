---
title: I forgot my password
translationKey: forgotpassword
layout: 'layouts/base.njk'
eleventyNavigation:
  key: forgotPasswordEn
  title: I forgot my password
  locale: en
  parent: troubleSigningInEn
  order: 1
---

# Forgot your password

If you believe you are entering the correct password, but you are still getting an error that says "The email and password combination do not match", try the following:

- Make sure the email address you entered is the one you used to create a CanadaLogin.
- If you're not sure which email you used, refer to our guide on what to do if you {% link links.forgotyouremail 'forgot your email' %} to figure out which email address is attached to your CanadaLogin.

## If you forgot your password, follow these steps to reset it:

1. On the password page when signing in, select the "Reset your password" link near the bottom of the page.

2. Check your email for a message from CanadaLogin. The email will contain a 6-digit one-time code.

3. Enter the code into the webpage and select "Continue".
   <gcds-notice type="info" notice-title-tag="h3" notice-title="Related help guide">
   <gcds-text>{% linkRef links.issuesenterverifyemail 'you-cannot-find-the-onetime-code-in-your-email-inbox' 'What to do if you cannot find the email code in your inbox' %}</gcds-text>
   </gcds-notice>

4. Complete 2-step verification.
   <gcds-notice type="info" notice-title-tag="h3" notice-title="Related help guides">
   <gcds-text>{% linkRef links.problemssigninginwith2stepverification 'problems-signing-in-with-2-step-verification' 'Problems signing in with 2-step verification' %}</gcds-text>
   </gcds-notice>

5. Enter your new password.
   <gcds-notice type="info" notice-title-tag="h3" notice-title="Related help guides">
   <gcds-text>{% linkRef links.createaccount 'how-to-make-a-strong-password' 'How to make a strong password' %} </gcds-text>
   <gcds-text>{% link links.issuespassword 'Problems creating a password' %} </gcds-text>
   </gcds-notice>

6. Select the "Continue" button.

7. Success! You have reset your password and signed in. You will now be taken to the program or service you were trying to access. You will also receive an email notifying you of the change you just made. You can ignore this email.

## It says your CanadaLogin is incomplete
<gcds-text>
When attempting to reset your password, you may come across this error message – "This CanadaLogin is incomplete. We cannot reset your password." This means that when originally setting up your CanadaLogin, you did not set up {% link links.twostepverificationmethods 'two-step verification' %}. If you remember your password you can sign in by entering your username and password and then complete the 2-step verification registration process.
</gcds-text>

If you have forgotten your password, but have not set up 2-step verification, there is currently no way for you to reset your password. Please {% link links.getstarted 'create a new CanadaLogin' %} with a different email. 
