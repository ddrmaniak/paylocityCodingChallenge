using System;
using System.Collections.Generic;
using SalaryDeductions.DAL;
using SalaryDeductions.Entities;

namespace SalaryDeductions.BLL
{
    public class DiscountBusinessRulesService : IDiscountBusinessRulesService
    {
        private readonly ISysParametersProvider sysParametersProvider;

        public DiscountBusinessRulesService(ISysParametersProvider sysParametersProvider)
        {
            this.sysParametersProvider = sysParametersProvider;
        }

        public DeductionPreviewResults GetTotalDeductions(IEnumerable<Beneficiary> beneficiaries)
        {
            var results = new DeductionPreviewResults();
            SysParameters sysparams = sysParametersProvider.Get();
            foreach (var beneficiary in beneficiaries)
            {
                decimal currTotal = 0;
                if (beneficiary.IsPrimary) currTotal += sysparams.PrimaryDeductionAmount;
                else currTotal += sysparams.DependentDeductionAmount;
                if (!string.IsNullOrEmpty(beneficiary.Firstname) && beneficiary.Firstname.ToUpper()[0] == sysparams.DiscountLetter) currTotal *= sysparams.DiscountAmountCoefficient;
                results.YearlyDeduction += currTotal;
            }
            results.NetPaycheckAmount = 2000 - results.PerPaycheckDeduction;
            return results;
        }
    }
}
