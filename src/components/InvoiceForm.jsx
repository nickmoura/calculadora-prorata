export default function InvoiceForm({ index, invoice, onChange }) {
  return (
    <div className="invoice mb-6 w-full p-4 border rounded-lg shadow-sm">
      <h2 className="text-xl sm:text-2xl font-semibold text-center text-indigo-700 mb-4">
        Fatura {index + 1}
      </h2>

      <div className="flex flex-col lg:flex-row lg:flex-wrap gap-4">
        <div className="flex flex-col lg:flex-row lg:items-center gap-2 lg:flex-[1_1_200px]">
          <label className="text-sm lg:w-36 font-medium text-center">Data Início:</label>
          <input
            type="date"
            className="border rounded p-2 w-full lg:w-[160px]"
            value={invoice.start || ''}
            onChange={e => onChange(index, 'start', e.target.value)}
          />
        </div>

        <div className="flex flex-col lg:flex-row lg:items-center gap-2 lg:flex-[1_1_200px]">
          <label className="text-sm lg:w-36 font-medium text-center">Data Leitura:</label>
          <input
            type="date"
            className="border rounded p-2 w-full lg:w-[160px]"
            value={invoice.end || ''}
            onChange={e => onChange(index, 'end', e.target.value)}
          />
        </div>

        <div className="flex flex-col lg:flex-row lg:items-center gap-2 lg:flex-[1_1_160px]">
          <label className="text-sm lg:w-36 font-medium text-center">Consumo:</label>
          <input
            type="number"
            className="border rounded p-2 w-full lg:w-[120px]"
            value={invoice.consumption}
            placeholder="Consumo"
            onChange={e => onChange(index, 'consumption', e.target.value)}
          />
        </div>

        <div className="flex flex-col lg:flex-row lg:items-center gap-2 lg:flex-[1_1_200px]">
          <label className="text-sm lg:w-36 font-medium text-center">Unidade:</label>
          <select
            className="border rounded p-2 w-full lg:w-[140px] text-center"
            value={invoice.unit}
            onChange={e => onChange(index, 'unit', e.target.value)}
          >
            <option value="" disabled>Selecione</option>
            <option value="kWh">kWh</option>
            <option value="m³">m³</option>
            <option value="L">L</option>
            <option value="kg">kg</option>
          </select>
        </div>
      </div>
    </div>
  );
}
