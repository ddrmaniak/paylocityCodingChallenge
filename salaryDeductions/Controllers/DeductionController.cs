using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
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
        public DeductionPreviewResults Post(List<Beneficiary> beneficiaries)
        {
            return _discountBusinessRules.GetTotalDeductions(beneficiaries);
        }
    }
}
