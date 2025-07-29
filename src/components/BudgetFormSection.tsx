import React, { useState } from 'react';
import { useIntersectionObserver } from '../hooks/useParallax';

const features = [
  { id: 'area_sqft', label: 'Area (in sq. ft)', type: 'number' },
  { id: 'num_rooms', label: 'Number of Rooms', type: 'number' },
  { id: 'space_type', label: 'Space Type', type: 'select', options: ['residential', 'commercial', 'hospitality'] },
  { id: 'style', label: 'Style', type: 'select', options: ['scandinavian', 'modern', 'japandi', 'royal'] },
  { id: 'material', label: 'Material', type: 'select', options: ['standard', 'custom_wood', 'italian_marble', 'premium_tiles'] },
  { id: 'add_3d', label: 'Include 3D Design?', type: 'select', options: ['yes', 'no'] },
  { id: 'add_turnkey', label: 'Turnkey Execution?', type: 'select', options: ['yes', 'no'] },
  { id: 'add_smart_home', label: 'Add Smart Home Features?', type: 'select', options: ['yes', 'no'] },
];

const BudgetFormSection = () => {
  const { isVisible, ref } = useIntersectionObserver(0.1);
  const [formData, setFormData] = useState<any>({});
  const [quote, setQuote] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormData((prev: any) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setQuote(null);

    try {
      // Validate required fields
      if (!formData.area_sqft || !formData.num_rooms) {
        throw new Error('Area and Number of Rooms are required');
      }

      // Prepare payload matching FastAPI's BudgetRequest model
      const payload = {
        area_sqft: Number(formData.area_sqft),
        num_rooms: Number(formData.num_rooms),
        space_type: formData.space_type || 'residential',
        style: formData.style || 'modern',
        material: formData.material || 'standard',
        add_3d: formData.add_3d === 'yes' ? 1 : 0,
        add_turnkey: formData.add_turnkey === 'yes' ? 1 : 0,
        add_smart_home: formData.add_smart_home === 'yes' ? 1 : 0,
      };

      const response = await fetch('http://localhost:8000/predict', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const responseData = await response.json();

      if (!response.ok) {
        throw new Error(responseData.detail || 'Server error');
      }

      // Extract the predicted cost from the response
      if (typeof responseData.predicted_cost !== 'number') {
        throw new Error('Invalid prediction format from server');
      }

      // Round to nearest whole number for display
      setQuote(Math.round(responseData.predicted_cost));
    } catch (err: any) {
      console.error('Prediction error:', err);
      setError(err.message || 'Failed to get estimate. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="budget" ref={ref} className="relative py-32 overflow-hidden bg-gray-900">
      {/* Background elements */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          // backgroundImage: `url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80')`,
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          zIndex: 0,
        }}
      />
      <div className="absolute inset-0 bg-black/60 z-[1]" />

      {/* Form Container */}
      <div className="relative z-[2] max-w-5xl mx-auto px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <span className="font-sans text-xs text-amber-300 tracking-[0.3em] mb-4 block">BUDGET ESTIMATOR</span>
          <h2 className="font-serif text-4xl sm:text-5xl font-light text-white mb-4">
            Calculate Your <span className="italic font-medium">Luxury Interior Budget</span>
          </h2>
          <div className="w-24 h-px bg-amber-300 mx-auto mb-6" />
          <p className="font-sans text-base sm:text-lg text-gray-300 font-light max-w-3xl mx-auto leading-relaxed">
            Get an instant estimate tailored to your space, style, and features.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className={`grid sm:grid-cols-2 gap-6 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
        >
          {features.map((field) => (
            <div key={field.id} className="flex flex-col">
              <label htmlFor={field.id} className="font-sans text-sm text-gray-200 mb-2">
                {field.label}
                {(field.id === 'area_sqft' || field.id === 'num_rooms') && (
                  <span className="text-red-400 ml-1">*</span>
                )}
              </label>
              {field.type === 'select' ? (
                <select
                  id={field.id}
                  required={field.id === 'area_sqft' || field.id === 'num_rooms'}
                  value={formData[field.id] || ''}
                  onChange={handleChange}
                  className="bg-black/60 border border-gray-700 text-white font-sans text-sm p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-300"
                >
                  <option value="">Select</option>
                  {field.options?.map((option) => (
                    <option key={option} value={option}>
                      {option.replace(/_/g, ' ')}
                    </option>
                  ))}
                </select>
              ) : (
                <input
                  type={field.type}
                  id={field.id}
                  required={field.id === 'area_sqft' || field.id === 'num_rooms'}
                  min={field.type === 'number' ? 1 : undefined}
                  value={formData[field.id] || ''}
                  onChange={handleChange}
                  className="bg-black/60 border border-gray-700 text-white font-sans text-sm p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-300"
                />
              )}
            </div>
          ))}

          <div className="sm:col-span-2 text-center mt-6">
            <button
              type="submit"
              disabled={loading}
              className="group relative inline-flex items-center justify-center px-8 py-4 font-sans text-sm font-medium text-black bg-amber-300 hover:bg-amber-200 hover:shadow-lg hover:shadow-amber-300/20 transition-all duration-300 rounded-xl disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {loading ? 'Calculating...' : 'Get Quote'}
              <span className="ml-3 transform group-hover:translate-x-2 transition-transform">→</span>
            </button>
          </div>

          {quote !== null && (
            <div className="sm:col-span-2 text-center mt-8 animate-fadeIn">
              <p className="font-serif text-white text-xl">
                Estimated Budget: <span className="text-amber-300 font-semibold">₹ {quote.toLocaleString('en-IN')}</span>
              </p>
              <p className="text-gray-300 mt-2 text-sm">This is an estimate. Final pricing may vary.</p>
            </div>
          )}

          {error && (
            <div className="sm:col-span-2 text-center mt-4 text-red-400 animate-fadeIn">
              <p>{error}</p>
              <p className="text-sm text-gray-400 mt-1">Please check your inputs and try again</p>
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

export default BudgetFormSection;