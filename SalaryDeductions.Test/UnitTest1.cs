using SalaryDeductions.BLL;
using SalaryDeductions.DAL;
using SalaryDeductions.Entities;
using System;
using System.Collections.Generic;
using Xunit;

namespace SalaryDeductions.Test
{
    public class UnitTest1
    {
        List<List<Beneficiary>> testBeneficiaries = new List<List<Beneficiary>>()
        {
            new List<Beneficiary>()
            {
                new Beneficiary("Arnold", "Schwartzenegger", true),
                new Beneficiary("Jarnold", "Schwartzenegger", false),
                new Beneficiary("Donold", "Schwartzenegger", false),
                new Beneficiary("Ronold", "Schwartzenegger", false)
            },
            new List<Beneficiary>()
            {
                new Beneficiary("Arnold", "Schwartzenegger", true),
                new Beneficiary("Jarnold", "Schwartzenegger", false),
                new Beneficiary("Donold", "Schwartzenegger", false)
            },
            new List<Beneficiary>()
            {
                new Beneficiary("Arnold", "Schwartzenegger", true),
                new Beneficiary("Arnold jr.", "Schwartzenegger", false),
                new Beneficiary("Donold", "Schwartzenegger", false),
                new Beneficiary("Ronold", "Schwartzenegger", false)
            },
            new List<Beneficiary>()
            {
                new Beneficiary("Swarnold", "Schwartzenegger", true),
                new Beneficiary("Donold", "Schwartzenegger", false),
                new Beneficiary("Ronold", "Schwartzenegger", false)
            },
            new List<Beneficiary>()
            {
                new Beneficiary("Swarnold", "Schwartzenegger", true),
                new Beneficiary("Ahnold", "Schwartzenegger", false),
                new Beneficiary("Ronold", "Schwartzenegger", false)
            }
        };

        List<ISysParametersProvider> providers = new List<ISysParametersProvider>()
        {
            new SysParametersMock(1, 2000M, 26, 'A', .9M, 1000M, 500M),
            new SysParametersMock(1, 3000M, 26, 'A', .9M, 1500M, 500M),
            new SysParametersMock(1, 2000M, 12, 'A', .9M, 1000M, 500M)
        };

        [Theory]
        [InlineData(0, 0, 2400.00, 92.31, 1907.69)]
        [InlineData(1, 0, 1900.00, 73.08, 1926.92)]
        [InlineData(2, 0, 2350.00, 90.38, 1909.62)]
        [InlineData(3, 0, 2000.00, 76.92, 1923.08)]
        [InlineData(4, 0, 1950.00, 75.00, 1925.00)]
        public void Test1(int beneficiarySet, int providerMock, decimal yearlyDed, decimal paycheckDed, decimal paycheckNetPay)
        {
            var provider = providers[providerMock];
            var param = provider.Get();
            var service = new DiscountBusinessRulesService(provider);
            var result = service.GetTotalDeductions(testBeneficiaries[beneficiarySet], param.DefaultPaycheckAmount, param.DefaultPaycheckPerYear);
            Assert.Equal(String.Format("{0:0.00}", result.YearlyDeduction), String.Format("{0:0.00}", yearlyDed));
            Assert.Equal(String.Format("{0:0.00}", result.PerPaycheckDeduction), String.Format("{0:0.00}", paycheckDed));
            Assert.Equal(String.Format("{0:0.00}", result.NetPaycheckAmount), String.Format("{0:0.00}", paycheckNetPay));
        }
    }
}
