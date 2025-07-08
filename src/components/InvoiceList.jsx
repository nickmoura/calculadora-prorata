import InvoiceForm from './InvoiceForm';

export default function InvoiceList({ invoices, setInvoices }) {
  const handleInputChange = (index, field, value) => {
    const newInvoices = [...invoices];
    newInvoices[index][field] = value;
    setInvoices(newInvoices);
  };

  return (
    <div className="space-y-6">
      {invoices.map((invoice, index) => (
        <InvoiceForm
          key={index}
          index={index}
          invoice={invoice}
          onChange={handleInputChange}
        />
      ))}
    </div>
  );
}
