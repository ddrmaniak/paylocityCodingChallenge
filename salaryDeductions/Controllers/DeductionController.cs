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
        private readonly ILogger<DeductionController> _logger;
        private readonly IDiscountBusinessRulesService _discountBusinessRules;

        public DeductionController(ILogger<DeductionController> logger, IDiscountBusinessRulesService discountBusinessRules)
        {
            _logger = logger;
            _discountBusinessRules = discountBusinessRules;
        }

        [HttpPost]
        public DeductionPreviewResults Post(BeneficiaryDTO previewResultsParams)
        {
            return _discountBusinessRules.GetTotalDeductions(previewResultsParams.Beneficiaries, previewResultsParams.PaycheckAmount, previewResultsParams.PaycheckCount);
        }
    }
}
