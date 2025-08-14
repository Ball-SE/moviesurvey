function TextField({ label, value, onChange, error }) {
    return (
        <div className="flex flex-col gap-2">
            <label className="text-sm font-medium">{label} <span className="text-red-500">*</span> </label>
            <input type="text" value={value} onChange={onChange} className="border border-gray-300 rounded-md p-2" />
            {error && <p className="text-red-500 text-sm">{error}</p>}
        </div>

    )
}

export default TextField;