using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using SalaryDeductions.BLL;
using SalaryDeductions.Entities;

namespace SalaryDeductions.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class DeductionController : ControllerBase
    {
        private readonly IDiscountBusinessRulesService _discountBusinessRules;

        public DeductionController(IDiscountBusinessRulesService discountBusinessRules)
        {
            _discountBusinessRules = discountBusinessRules;
        }

        [HttpPost]
        public DeductionPreviewResults Post(BeneficiaryDTO previewResultsParams)
        {
            return _discountBusinessRules.GetTotalDeductions(previewResultsParams.Beneficiaries, previewResultsParams.PaycheckAmount, previewResultsParams.PaycheckCount);
        }
    }
}
