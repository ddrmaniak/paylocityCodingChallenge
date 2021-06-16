using System.Collections.Generic;

namespace SalaryDeductions.Entities
{
    public class BeneficiaryDTO
    {
        public IEnumerable<Beneficiary> Beneficiaries { get; set; }
        public decimal PaycheckAmount { get; set; }
        public int PaycheckCount { get; set; }
    }
}
