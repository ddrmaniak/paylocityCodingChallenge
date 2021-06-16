using System;

namespace SalaryDeductions.Entities
{
  public class DeductionPreviewResults
  {
    public decimal YearlyDeduction { get; set; }
    public decimal PerPaycheckDeduction { get; set; }
    public decimal NetPaycheckAmount{get; set;}
  }
}
