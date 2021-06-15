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
    public class SysParametersController : ControllerBase
    {
        private readonly ILogger<DeductionController> _logger;
        private readonly ISysParametersService _sysParametersService;

        public SysParametersController(ILogger<DeductionController> logger, ISysParametersService sysParametersService)
        {
            _logger = logger;
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
