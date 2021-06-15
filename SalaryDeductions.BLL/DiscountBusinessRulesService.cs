using System;
using System.Collections.Generic;
using SalaryDeductions.Entities;

namespace SalaryDeductions.BLL
{
    public class DiscountBusinessRulesService : IDiscountBusinessRulesService
    {
        public DeductionPreviewResults GetTotalDeductions(IEnumerable<Beneficiary> beneficiaries)
        {
            var results = new DeductionPreviewResults();
            foreach (var beneficiary in beneficiaries)
            {
                decimal currTotal = 0;
                if (beneficiary.IsPrimary) currTotal += 1000;
                else currTotal += 500;
                if (!string.IsNullOrEmpty(beneficiary.Firstname) && beneficiary.Firstname.ToUpper()[0] == 'A') currTotal *= .9M;
                results.YearlyDeduction += currTotal;
            }
            results.NetPaycheckAmount = 2000 - results.PerPaycheckDeduction;
            return results;
        }
    }
}
