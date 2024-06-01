import { ChangeEventHandler, FC } from "react";

export interface SearchFieldProps {
  type: string;
  placeholder: string;
  searchTerm: string;
  action: ChangeEventHandler<HTMLInputElement>;
  label?: string;
  errorMessage?: string;
}

export const SearchField: FC<SearchFieldProps> = ({
  type,
  placeholder,
  searchTerm,
  action,
  errorMessage,
  label,
}) => {
  return (
    <div className="search-container">
      <label className="search-label" htmlFor="searchField">
        {label}
      </label>
      <input
        className="search-field"
        type={type}
        id="searchField"
        placeholder={placeholder}
        value={searchTerm}
        onChange={action}
        aria-label="Search field"
        aria-describedby="searchFieldError"
        autoComplete="off"
        autoFocus
      />
      {errorMessage && <span id="searchFieldError">{errorMessage}</span>}
    </div>
  );
};
