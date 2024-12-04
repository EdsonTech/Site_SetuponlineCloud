import React from 'react';
import { COMPANY_INFO } from '../../utils/constants';

export function CompanyInfo() {
  return (
    <div className="mt-8 p-6 bg-gray-50 rounded-2xl">
      <h4 className="text-lg font-semibold mb-4">Informações Legais</h4>
      <div className="space-y-2 text-sm text-gray-600">
        <p>NIF (Angola): {COMPANY_INFO.registrations.angola}</p>
        <p>CNPJ (Brasil): {COMPANY_INFO.registrations.brazil}</p>
        <p className="mt-4">
          A Setuponline é uma empresa de direito Angolano e Brasileiro no sector das tecnologias 
          de Informação, estabelecida desde {COMPANY_INFO.founded} com uma equipe de aproximadamente {COMPANY_INFO.employees} profissionais 
          distribuídos entre Angola e Brasil.
        </p>
      </div>
    </div>
  );
}