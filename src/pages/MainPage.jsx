import { useState } from 'react';
import InvoiceList from '../components/InvoiceList';
import ResultBox from '../components/ResultBox';
import { showToast } from '../components/ToastHandler';
import { calculateProrata } from '../utils/calculateProrata';
import { formatNumber } from '../utils/formatNumber';

export default function MainPage() {
  const [invoices, setInvoices] = useState([
    { start: '', end: '', consumption: '' },
    { start: '', end: '', consumption: '' }
  ]);

  const [results, setResults] = useState([]);

  const handleCalculate = () => {
    const newResults = [];
    let hasError = false;

    invoices.forEach((invoice, idx) => {
      if (!invoice.start || !invoice.end || isNaN(parseFloat(invoice.consumption))) {
        showToast(`Preencha todos os campos da fatura ${idx + 1}.`, 'error');
        hasError = true;
        return;
      }

      const prorata = calculateProrata(invoice.start, invoice.end, parseFloat(invoice.consumption));
      if (!prorata) {
        showToast(`Datas inválidas na fatura ${idx + 1}.`, 'error');
        hasError = true;
        return;
      }

      newResults.push(prorata.map(p => ({
        month: p.month,
        value: formatNumber(p.value)
      })));
    });

    if (!hasError) {
      setResults(newResults);
      showToast('Cálculo concluído com sucesso!', 'success');
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center p-6">
      <div className="w-full max-w-screen-lg bg-white rounded-2xl shadow-lg p-6 mx-auto">
        <h1 className="text-2xl text-center mb-5 font-bold mb-4">Pro-Rata de Consumo</h1>

        <InvoiceList invoices={invoices} setInvoices={setInvoices} />

        <button
          onClick={handleCalculate}
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 hover:cursor-pointer"
        >
          Calcular Pro-Rata
        </button>

        {results.length > 0 && <ResultBox results={results} invoices={invoices} />}
      </div>
    </main>
  );
}
