// Example card schemas for the playground. Each field's `map` is a dot path
// that says where its value lands in the API request payload.
export const presets = {
  personal: {
    label: 'Personal info',
    schema: {
      title: 'Personal information',
      description: 'Retail onboarding, step 1 of 3',
      fields: [
        { key: 'firstName', label: 'First name', type: 'text', required: true, map: 'customer.name.first' },
        { key: 'lastName', label: 'Last name', type: 'text', required: true, map: 'customer.name.last' },
        { key: 'email', label: 'Email', type: 'email', required: true, map: 'customer.contact.email', wide: true },
        { key: 'segment', label: 'Account segment', type: 'select', options: ['Prepaid', 'Postpaid', 'Enterprise'], map: 'account.segment' },
        { key: 'dob', label: 'Date of birth', type: 'date', map: 'customer.dob' },
        { key: 'marketing', label: 'Send me offers', type: 'toggle', map: 'preferences.marketingOptIn' },
      ],
    },
  },
  company: {
    label: 'Company details',
    schema: {
      title: 'Company details',
      description: 'Corporate account, Customer 360',
      fields: [
        { key: 'company', label: 'Registered name', type: 'text', required: true, map: 'org.legalName', wide: true },
        { key: 'gstin', label: 'GSTIN', type: 'text', pattern: '^[0-9A-Z]{15}$', hint: '15 letters or digits', map: 'org.tax.gstin' },
        { key: 'size', label: 'Employees', type: 'select', options: ['1–50', '51–500', '500+'], map: 'org.size' },
        { key: 'billingEmail', label: 'Billing email', type: 'email', required: true, map: 'org.billing.email', wide: true },
      ],
    },
  },
  offer: {
    label: 'Select offer',
    schema: {
      title: 'Select offer',
      description: 'Bulk offer assignment from master data',
      fields: [
        { key: 'plan', label: 'Plan', type: 'select', options: ['Unlimited 5G', 'Data 50 GB', 'Voice Plus'], default: 'Unlimited 5G', map: 'order.offer.planId' },
        { key: 'lines', label: 'Number of lines', type: 'number', default: 10, map: 'order.quantity' },
        { key: 'start', label: 'Activation date', type: 'date', map: 'order.activateOn' },
        { key: 'autoRenew', label: 'Renew automatically', type: 'toggle', default: true, map: 'order.offer.autoRenew' },
      ],
    },
  },
};
