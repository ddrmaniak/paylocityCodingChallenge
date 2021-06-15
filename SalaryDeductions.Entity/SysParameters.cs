namespace SalaryDeductions.Entities
{
    public class SysParameters
    {
    public int Id { get; set; }
    public decimal DefaultPaycheckAmount { get; set; }
    public int DefaultPaycheckPerYear { get; set; }
    public char DiscountLetter { get; set; }
    public decimal DiscountAmountCoefficient { get; set; }
    public decimal PrimaryDeductionAmount { get; set; }
    public decimal DependentDeductionAmount { get; set; }
    }
}
