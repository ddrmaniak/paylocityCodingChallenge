using SalaryDeductions.DAL;
using SalaryDeductions.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SalaryDeductions.BLL
{
    public class SysParametersService : ISysParametersService
    {
        private readonly ISysParametersProvider sysParametersProvider;
        public SysParametersService(ISysParametersProvider sysParametersProvider)
        {
            this.sysParametersProvider = sysParametersProvider;
        }
        public SysParameters Update(SysParameters parameters)
        {
            sysParametersProvider.Update(parameters);
            return Get();
        }

        public SysParameters Get()
        {
            return sysParametersProvider.Get();
        }
    }
}
