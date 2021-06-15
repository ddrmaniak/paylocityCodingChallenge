using System;

namespace SalaryDeductions.Entities
{
  public class DeductionPreviewResults
  {
    public decimal YearlyDeduction { get; set; }
    public decimal PerPaycheckDeduction { get { return this.YearlyDeduction / 26.0M; } }
    public decimal NetPaycheckAmount{get; set;}
  }
}
