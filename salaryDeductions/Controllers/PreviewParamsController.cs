using Microsoft.AspNetCore.Mvc;
using SalaryDeductions.BLL;
using SalaryDeductions.Entities;

namespace SalaryDeductions.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class PreviewParamsController : ControllerBase
    {
        private readonly ISysParametersService _sysParametersService;

        public PreviewParamsController(ISysParametersService sysParametersService)
        {
            _sysParametersService = sysParametersService;
        }

        [HttpGet]
        public DefaultParamsDTO Get()
        {
            return _sysParametersService.GetDefaultParams();
        }
    }
}