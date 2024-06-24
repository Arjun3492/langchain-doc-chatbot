interface KeyFormProps {
  keyName: string;
  keyValue: string;
  setKeyValue: (key: string) => void;
}

const KeyForm: React.FC<KeyFormProps> = ({
  keyName,
  keyValue,
  setKeyValue,
}) => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setKeyValue(keyValue);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setKeyValue(event.target.value);
  };

  const placeholderMap: {
    [key: string]: string;
  } = {
    'OpenAI API Key': 'sk-...',
    'Pinecone API Key': '05473f56-...',
    'Pinecone region': 'us-west-1',
    'Pinecone index name': 'index-name',
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="relative">
        <p className="text-white text-sm font-medium mb-2">
          {keyName.charAt(0).toUpperCase() + keyName.slice(1)}
        </p>
        <div className="relative">
          <input
            type="password"
            value={keyValue}
            onChange={handleChange}
            placeholder={placeholderMap[keyName]}
            className="w-full px-2 py-3 text-sm text-gray-300 placeholder-gray-500 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
      </div>
    </form>
  );
};

export default KeyForm;
