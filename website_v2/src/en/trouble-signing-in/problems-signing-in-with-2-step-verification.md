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

## Cannot access your phone

If you cannot access your 2-step verification phone, there are two options to gain access to your account, depending on how many 2-step verification methods you have registered:

### If you have more than one 2-step verification phone number registered to your account

If you no longer have access to the default phone number on your account, but have more than one phone number registered to your account for 2-step verification, follow these steps to sign in:

1. On the "Complete 2-step verification" page when signing in, select the "try another way" link.

2. Select a phone number you currently have access to.

3. A 6-digit verification code will be sent to the phone number you selected via text message or voice call. Enter this code on the webpage when prompted.

4. Once you've signed in, you can navigate to your GC Sign in manage area, to {% linkRef links.manageyouraccount 'manage-your-account' 'manage your account settings' %}.

### If you only have one 2-step verification phone number registered to your account

If you do not have multiple numbers registered to your account, you will need to follow these steps to recover your phone number:

#### Before you start

- You will need access to a different phone number than the one that's currently on your account.
- This **will not** replace your existing phone number. To delete an existing phone number, you will have to navigate to your security settings once you have signed in. There are instructions on how to do this at the end of the "How to recover your phone number" section.

#### How to recover your phone number

1. On the "Complete 2-step verification" page when signing in, select "I cannot access my phone".

2. Check your email for a message from GC Sign in. The email will contain a 6-digit one-time code.

3. Enter the code on the webpage and select "continue".
  <gcds-notice type="info" notice-title-tag="h2" notice-title="Related help guide">
    <gcds-text>{% linkRef links.issuesenterverifyemail 'you-cannot-find-the-onetime-code-in-your-email-inbox' 'You cannot find the one-time code in your email inbox' %}</gcds-text>
  </gcds-notice>
4. Enter your new phone number.
5. You will need to verify your new phone number. Select how you want to receive the one-time verification code.
6. Retrieve the one-time code from your text messages or by answering the call from GC Sign in.
  <gcds-notice type="info" notice-title-tag="h2" notice-title="Related help guide">
    <gcds-text>{% linkRef links.problemssigninginwith2stepverification '#not-receiving-verification-codes-to-your-phone' 'Not receiving verification codes to your phone' %}</gcds-text>
  </gcds-notice>
7. Enter the code on the webpage.
8. Choose whether you want to set this number as your new default phone number.
   - Setting it as your default just means you will receive codes to this number first when you sign in. You can always choose a different registered number each time you sign in.
9. Success! You have recovered your phone number and signed in. You will now be taken to the program or service you were trying to access. You will also receive an email notifying you of the change you just made. You can ignore this email.

#### This does not replace any of the existing numbers on your account

To delete numbers you do not want on your account anymore, follow our guide on {% linkRef links.manageyouraccount 'manage-your-account' 'how to manage your account' %}.

## Not receiving verification codes to your phone

If you're not receiving verification codes to your phone, try the following:

- If you have a mobile phone, make sure airplane mode is off and that you have a cellular connection to your cellular service provider network.

- Your code may not arrive immediately. Wait up to 10 minutes, or try the "Request a new code" link to send your code again. You might have to wait a few seconds for the link to appear. The link will show up under the "Problems with the code?" header near the bottom of the page.

   If you request multiple codes, only the newest one-time code you receive will work. If you request and receive multiple messages at the same time, you may need to try more than one code.

- If you still are not receiving codes and you do not have an alternative number set up in your account that you can use to sign in, you might need to {% linkRef links.problemssigninginwith2stepverification '#how-to-recover-your-phone-number' 'recover your phone number' %}.
  <gcds-notice type="info" notice-title-tag="h2" notice-title="Related help guide">
    <gcds-text>{% linkRef links.problemssigninginwith2stepverification '#if-you-have-more-than-one-2-step-verification-phone-number-registered-to-your-account' 'How to sign in if you have more than one 2-step verification phone number registered to your account' %}</gcds-text>
  </gcds-notice>
