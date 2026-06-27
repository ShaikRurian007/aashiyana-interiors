// Web3Forms access key — create a free key at https://web3forms.com
// (takes 30s, just enter the destination email). Then set it here or via
// NEXT_PUBLIC_WEB3FORMS_KEY in the GitHub Actions build env.
// Until replaced, the form gracefully falls back to email/WhatsApp.
export const WEB3FORMS_KEY =
  process.env.NEXT_PUBLIC_WEB3FORMS_KEY || 'REPLACE_WITH_WEB3FORMS_ACCESS_KEY';

export const hasFormKey = WEB3FORMS_KEY && !WEB3FORMS_KEY.startsWith('REPLACE_');
