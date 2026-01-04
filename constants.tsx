
import React from 'react';
import { 
  CategoryKey, 
  CategoryInfo, 
  Variable, 
  TransactionType 
} from './types';

export const CATEGORIES: Record<CategoryKey, CategoryInfo> = {
  BASIC: { label: 'پایه', styles: 'text-blue-400 bg-blue-900/30 border-blue-800' },
  COMPUTED: { label: 'محاسباتی', styles: 'text-purple-400 bg-purple-900/30 border-purple-800' },
  ACCOUNT: { label: 'حساب', styles: 'text-cyan-400 bg-cyan-900/30 border-cyan-800' },
  CARD: { label: 'کارت', styles: 'text-indigo-400 bg-indigo-900/30 border-indigo-800' },
  TRANSFER: { label: 'انتقال', styles: 'text-emerald-400 bg-emerald-900/30 border-emerald-800' },
  TIMESTAMP: { label: 'زمان', styles: 'text-orange-400 bg-orange-900/30 border-orange-800' },
  BALANCE: { label: 'موجودی', styles: 'text-rose-400 bg-rose-900/30 border-rose-800' },
  INVESTMENT: { label: 'سرمایه', styles: 'text-amber-400 bg-amber-900/30 border-amber-800' },
  LOAN: { label: 'تسهیلات', styles: 'text-teal-400 bg-teal-900/30 border-teal-800' },
  REVERSAL: { label: 'برگشت', styles: 'text-red-400 bg-red-900/30 border-red-800' },
  RESTRAINT: { label: 'مسدودی', styles: 'text-slate-400 bg-slate-800 border-slate-700' },
  CORPORATE: { label: 'سازمانی', styles: 'text-zinc-400 bg-zinc-900/30 border-zinc-800' },
  ACCESS: { label: 'دسترسی', styles: 'text-fuchsia-400 bg-fuchsia-900/30 border-fuchsia-800' }
};

export const MOCK_VARIABLES: Variable[] = [
  { alwaysAvailable: true, category: "BASIC", dataType: "Number", description: "مبلغ تراکنش", name: "amount", sampleValue: "1,000,000" },
  { alwaysAvailable: true, category: "COMPUTED", dataType: "String", description: "شرح واحد پول", name: "currencyDescription", sampleValue: "ریال" },
  { alwaysAvailable: true, category: "ACCOUNT", dataType: "String", description: "شماره حساب", name: "accountNumber", sampleValue: "123-456-789" },
  { alwaysAvailable: false, category: "CARD", dataType: "String", description: "شماره کارت ماسک شده", name: "cardNumber", sampleValue: "6037 **** **** 1234" },
  { alwaysAvailable: false, category: "TRANSFER", dataType: "String", description: "نام مقصد", name: "destCustomerName", sampleValue: "محمد علوی" },
  { alwaysAvailable: false, category: "TIMESTAMP", dataType: "String", description: "زمان محلی", name: "tranTimeLocal", sampleValue: "۱۴:۳۰:۴۵" },
  { alwaysAvailable: true, category: "TIMESTAMP", dataType: "Date", description: "تاریخ محلی", name: "tranDateLocal", sampleValue: "۱۴۰۳/۱۰/۰۹" },
  { alwaysAvailable: false, category: "BALANCE", dataType: "Number", description: "مانده پس از تراکنش", name: "depositBalanceAfter", sampleValue: "5,450,000" },
  { alwaysAvailable: false, category: "CARD", dataType: "String", description: "نوع پایانه", name: "terminalTypeDescription", sampleValue: "خودپرداز" },
  { alwaysAvailable: false, category: "LOAN", dataType: "String", description: "شماره تسهیلات", name: "loanId", sampleValue: "L-987654" },
];

export const TRANSACTION_TYPES: TransactionType[] = [
  { 
    value: 'WITHDRAWAL', 
    label: 'برداشت وجه', 
    color: 'from-rose-500 to-red-600',
    templates: [
      { title: 'استاندارد', content: "برداشت مبلغ {amount} {currencyDescription} از {terminalTypeDescription}" },
      { title: 'کامل', content: "برداشت وجه به مبلغ {amount} {currencyDescription} در تاریخ {tranDateLocal} از {terminalTypeDescription}" }
    ]
  },
  { 
    value: 'DEPOSIT', 
    label: 'واریز وجه', 
    color: 'from-emerald-500 to-teal-600',
    templates: [
      { title: 'استاندارد', content: "واریز مبلغ {amount} بابت {currencyDescription}" },
      { title: 'کامل', content: "واریز به حساب {accountNumber} مبلغ {amount} {currencyDescription} در تاریخ {tranDateLocal}" }
    ]
  },
  { 
    value: 'TRANSFER_OUT', 
    label: 'انتقال خروجی', 
    color: 'from-amber-500 to-orange-600',
    templates: [
      { title: 'کارت به کارت', content: "انتقال به {destCustomerName} مبلغ {amount}" },
      { title: 'کامل', content: "انتقال وجه به {destCustomerName} مبلغ {amount} در {tranTimeLocal}" }
    ]
  }
];
