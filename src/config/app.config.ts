interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Game Owner'],
  customerRoles: ['Customer'],
  tenantRoles: ['Game Owner', 'Game Administrator', 'Game Developer'],
  tenantName: 'Company',
  applicationName: 'geometry dash platform ',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'View company information',
    'Edit personal information',
    'View user information',
    'Cannot modify company information',
  ],
  ownerAbilities: [
    'Manage new_table_zxqo',
    'Manage new_table_iwfb',
    'Manage new_table',
    'Manage user',
    'Manage company',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/37d4aac0-9e59-4ec0-874c-046e860c7920',
};
