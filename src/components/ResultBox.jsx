export default function ResultBox({ results, invoices }) {
  return (
    <div className="mt-6 space-y-4">
      {results.map((result, idx) => {
        const unit = invoices[idx]?.unit || ''; // pega a unidade da fatura correspondente
        return (
          <div key={idx} className="p-4 bg-gray-50 rounded">
            <h3 className="font-semibold mb-2">Resultado Fatura {idx + 1}</h3>
            {result.map((p, i) => (
              <p key={i}>
                {p.month}: {p.value} {unit}
              </p>
            ))}
          </div>
        );
      })}
    </div>
  );
}
