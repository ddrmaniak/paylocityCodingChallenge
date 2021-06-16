using SalaryDeductions.Entities;
using System.Collections.Generic;

namespace SalaryDeductions.BLL
{
    public interface IDiscountBusinessRulesService
    {
        DeductionPreviewResults GetTotalDeductions(IEnumerable<Beneficiary> beneficiaries, decimal paycheckAmount, int paycheckCount);
    }
}