using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using SalaryDeductions.DAL;
using SalaryDeductions.Entities;

namespace SalaryDeductions.Test
{
    public class SysParametersMock : ISysParametersProvider
    {
        private readonly SysParameters sysParameters;
        public SysParametersMock(int id, decimal payChkAmt, int payChkPerYear, char discountLtr, decimal discountAmtCoeff, decimal PrimeDeductionAmt, decimal DepndtDedAmt)
        {
            sysParameters = new SysParameters()
            {
                Id = id,
                DefaultPaycheckAmount = payChkAmt,
                DefaultPaycheckPerYear = payChkPerYear,
                DiscountLetter = discountLtr,
                DiscountAmountCoefficient = discountAmtCoeff,
                PrimaryDeductionAmount = PrimeDeductionAmt,
                DependentDeductionAmount = DepndtDedAmt,
            };
        }
        public SysParameters Get()
        {
            return sysParameters;
        }

        public DefaultParamsDTO GetDefaultParams()
        {
            return new DefaultParamsDTO() 
            { 
                DefaultPaycheckAmount = sysParameters.DefaultPaycheckAmount,
                DefaultPaycheckPerYear = sysParameters.DefaultPaycheckPerYear
            };
        }

        public void Update(SysParameters parameters)
        {
        }
    }
}
