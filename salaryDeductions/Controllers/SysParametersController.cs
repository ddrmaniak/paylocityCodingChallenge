using Microsoft.AspNetCore.Mvc;
using SalaryDeductions.BLL;
using SalaryDeductions.Entities;

namespace SalaryDeductions.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class SysParametersController : ControllerBase
    {
        private readonly ISysParametersService _sysParametersService;

        public SysParametersController(ISysParametersService sysParametersService)
        {
            _sysParametersService = sysParametersService;
        }

        [HttpPost]
        public SysParameters Post(SysParameters parameters)
        {
            return _sysParametersService.Update(parameters);
        }

        [HttpGet]
        public SysParameters Get()
        {
            return _sysParametersService.Get();
        }
    }
}
