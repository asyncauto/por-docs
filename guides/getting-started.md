---
title: Getting Started - Mr.Albert POR
layout: layouts/post.ejs
tags: guides, getting-started
---
# Getting Started

This guide will take you through the steps to setup the Mr.Albert POR product for your team or organization. 

* If you are not already a Mr.Albert user, start by signing up at [https://mralbert.in](https://mralbert.in). We will get back to you and guide you on setting up your account.

* If you are already using Mr.Albert and want to add/enable the POR product for your account, send us a mail at alex@mralbert.in

Let's get started.

---

## 1. Create Users

The first step is to add users who will have access to your Mr.Albert POR account. There are multiple levels of user accounts (admins, approvers, creators) with varying permissions - perfect to achieve access control rules. 

Currently, to add new users, please let us know via email and we will set up the new users for your account.

If you already have a Mr.Albert account, users already added to that account will be available within the POR product as well. 

---
## 2. Create Budgets

All Purchase Order Requests need to be filed under any one budget. Selecting the budget is a mandatory field while creating a POR. A budget needs to be created by following the steps below before a POR can be created under that budget.

To create a budget:
* Navigate to the "Budgets" tab in the Mr.Albert POR interface.
<br />
* Click "Create Budget"
![Create Budget from the Budgets tab](/files/guides-getting-started-step2-create-budgets.png)
<br />
* Enter a Code and Name for the budget, set the budget amount, and select L1 and L2 approvers from the drop-down list.
 ![Enter new budget's details](/files/guides-getting-started-step2-create-budgets-form.png)	
<br />
*  The drop-down list will be showing users created in Step 1 above. If new users need to be added, repeat Step 1.
*   It is possible to have just one approver - L1. Leave the L2 Approver field blank in such cases.
*Tip: For details on each of the available fields in the "Create Budget" page, please read the reference article: [Create or Edit a Budget](/reference/budget/create-edit-budget)*
<br><br />
* Click "Submit". The new budget will now be created and should be visible in the Budgets tab. 
---
## 3. Create Vendors

A Vendor is another mandatory field to be filled while creating a POR. Similar to the case with budgets, the list of vendors added in this step will be displayed in a drop-down list while creating a POR. A new vendor needs to be created by following the steps below before a POR can be created with that vendor.

To create a vendor:
* Navigate to the "Vendors" tab in the Mr.Albert POR interface.
<br><br />
* Click "Create Vendor"
	![Vendors tab](/files/guides-getting-started-step3-vendors-tab.png)
<br />
* Enter the details of the vendor.
	![Enter new vendor's details](/files/guides-getting-started-step3-create-vendor-form.png)
<br />
* Under the "Banking" section in the "Create Vendor" page, enter either bank account details of the vendor or their UPI address, but not both. 
<br><br />
*Tip: For details on each of the available fields in the "Create Vendor" page, please read the reference article: [Create or Edit a Vendor](/reference/vendor/create-edit-vendor)*
<br><br />
* Click "Submit". The new vendor will now be created and will be visible in the table in the Vendors tab. 

---
## 4. Setup Payout integration

To be able to issue payouts from within the Mr.Albert POR interface, your payment processor account (eg. RazorpayX) needs to be connected to your Mr.Albert POR account. To set this up, please send an email to alex@mralbert.in.

---

## 5. Create the first POR

With user accounts added, budgets set up and vendors added, you are now ready to create the first POR. 

To create a POR:
* Navigate to the "PO Requests" tab in the Mr.Albert POR interface.
<br><br />
* Click "Create POR"
![Create POR button](/files/guides-getting-started-create-por-button.png)
<br><br />
* Fill in the details for the POR.
![Fill POR Details](/files/guides-getting-started-create-por-details.png)
<br><br />
*Tip: For detailed information on all the fields in the Create POR page, read the reference article: [Create or Edit a POR](/reference/por/create-edit-por)*
<br><br />
* Click "Submit". The newly created POR will be visible in the table in the PO Requests tab. 
	* An automated email notification is sent to all admins and approvers whenever a new POR is created. 

---

## 6. Approve the POR

Ensure that the account you are logged in to is set as the L1 Approver (or L2 Approver, as the case may be) for the budget under which you created the POR in Step 4 above. 

To approve a POR:
* Navigate to the "Approvals" tab in the Mr.Albert POR interface.
<br><br />
* By default, you will be shown the "Pending on me" view which lists all PORs pending approval from you - the L1 or L2 Approver.
![Approval tab and pending on me list](/files/guides-getting-started-step6-approval-tab-pending-on-me.png)
<br><br />
* In the table that lists pending PORs, click on the "pending" link under the "Status" column of the particular POR. 
![Click on status "pending" link of the POR](/files/guides-getting-started-step6-approval-tab-status-pending-link.png)
<br><br />
* Check the details and scroll to the bottom of the page to find the "Approve" or "Reject" buttons. To approve the POR, click "Approve". 
![Scroll to bottom and click Approve button](/files/guides-getting-started-step6-approval-tab-approve-button.png)
<br><br />
* The POR will now be marked as approved by you - L1 or L2 Approver as the case may be.
* If you are the L1 Approver, the L2 Approver will need to follow the same steps detailed above to give L2 approval to the POR.
* If you are the L2 Approver, the approval process is now complete and you may proceed to payout as needed.
* If there is only one level of approval, the approval process will be complete when the POR is given L1 Approval. 

*Tip: For detailed information on all available options related to Approvals, read the reference article: [Approve a POR](/reference/approval/approve-por) and [Reject a POR](/reference/approval/reject-por)*

---

## 7. Issue Payout

Payout is the final stage of the POR workflow. For approved PORs, payouts can be issued from within the Mr.Albert POR interface. Once issued, payouts will be automatically made from your company's RazorpayX account (or other payment processor accounts) integrated to the Mr.Albert POR account.

To issue a payout:
* From the "PO Requests" tab (or from anywhere else you find the clickable "PO Request no"s of the PORs - eg. in the Approvals tab, Budget detail page etc.), click on the "PO Request no" of the POR for which you want to issue the payout.
![Click on the PO Request no](/files/guides-getting-started-step7-payout-tab-click-por-number.png)
<br><br />
* In the POR detail page that loads, switch to the "Payouts" tab shown to the right side of the POR details.
<br><br />
* Verify the amounts and click "Create payout". This will trigger an outward payment from the RazorpayX account connected to your Mr.Albert POR account.
![Payouts tab and create payout](/files/guides-getting-started-step7-payout-tab-create-payout.png)
<br><br />
* After triggering the payment, reload the page and click the "refresh" icon in the table under "Payout details" to update the status of the payout transaction. 
![Update payout status](/files/guides-getting-started-step7-payout-tab-refresh-status.png)
<br><br />
* UTR number of successful transactions will be displayed in the table along with the other details.
![Payout status updated with UTR number](/files/guides-getting-started-step7-payout-tab-processed-utr.png)

*Tip: For detailed information on all available options related to Payouts, read the reference article: [Issue a Payout](/reference/payout/issue-payout)*

---

That's it, you have completed setting up Mr.Albert POR and also explored one complete journey of a POR - from creation through approval to payout. 

Based on integrations set up in your account, the Purchase Orders will be synced to your Zoho Books account. 

*To keep learning about Mr.Albert POR, check out our **[Guides](/guides)** and **[Reference](/reference)** articles.*