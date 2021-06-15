using System;

namespace SalaryDeductions.Entities
{
    public class Beneficiary
    {
        public string Firstname{ get; set; }
        public string Lastname{ get; set; }
        public bool IsPrimary{ get; set; }
    }
}
