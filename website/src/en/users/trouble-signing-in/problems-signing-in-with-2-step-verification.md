---
title: Problems signing in with 2-step verification
translationKey: problemssigninginwith2stepverification
layout: 'layouts/base.njk'
eleventyNavigation:
  key: problemsSigningInWith2StepVerificationEn
  title: Problems signing in with 2-step verification
  locale: en
  parent: troubleSigningInEn
  order: 4
---

# Problems signing in with 2-step verification

## Cannot access your 2-step verification phone

If you do not have multiple numbers registered to your account, you will need to follow these steps to recover your 2-step verification:

#### Before you start

- You will need access to a different phone number than the one that's currently on your account.
- This **will not** replace your existing phone number. To delete an existing phone number, you will have to navigate to your security settings once you have signed in. There are instructions on how to do this at the end of the "How to recover your phone number" section.

#### How to recover your 2-step verification

1. On the “Complete 2-step verification” page or the “Check your phone” page when signing in, select “I cannot access my phone”.

2. Check your email for a message from GC Sign in. The email will contain a 6-digit one-time code.

3. Enter the code on the webpage and select "continue".
  <gcds-notice type="info" notice-title-tag="h2" notice-title="Related help guide">
    <gcds-text>{% linkRef links.issuesenterverifyemail 'you-cannot-find-the-onetime-code-in-your-email-inbox' 'You cannot find the one-time code in your email inbox' %}</gcds-text>
  </gcds-notice>
4. Enter your new phone number.
5. You will need to verify your new phone number. Select how you want to receive the one-time verification code.
6. Retrieve the one-time code from your text messages or by answering the call from GC Sign in.
  <gcds-notice type="info" notice-title-tag="h2" notice-title="Related help guide">
    <gcds-text>{% link '#not-receiving-verification-codes-to-your-phone' 'Not receiving verification codes to your phone' %}</gcds-text>
  </gcds-notice>
7. Enter the code on the webpage.
8. You will be prompted to set up a backup verification method. You can skip this step if you do not want to set one up.
9. Success! You have recovered your 2-step verification and signed in. You will now be taken to the program or service you were trying to access. You will also receive an email notifying you of the change you just made. You can ignore this email.

<gcds-notice type="warning" notice-title-tag="h2" notice-title="This does not replace any of the existing numbers on your account">
  <gcds-text>To delete numbers you do not want on your account anymore, follow our guide 
on how to {% linkRef links.managehowyousignin '##delete-a-2-step-verification-phone-number' 'delete a 2-step verification phone number' %}.</gcds-text>
</gcds-notice>

## Not receiving verification codes to your phone

If you're not receiving verification codes to your phone, try the following:

- If you have a mobile phone, make sure airplane mode is off and that you have a cellular connection to your cellular service provider network.

- Your code may not arrive immediately. Wait up to 10 minutes, or try the "Request a new code" link to send your code again. You might have to wait a few seconds for the link to appear. The link will show up under the "Problems with the code?" header near the bottom of the page.

  - If you request multiple codes, only the newest one-time code you receive will work. If you request and receive multiple messages at the same time, you may need to try more than one code.

- Try using a different phone number or delivery method, if you have one set up. How to do this: 
  - On the “check your phone” page, select the “Try another way” link. 
  - Select a different phone number or verification method.

- If you still are not receiving codes and you do not have an alternative number set up in your account that you can use to sign in, you might need to {% link links.problemssigninginwith2stepverification 'recover your phone number' %}.
