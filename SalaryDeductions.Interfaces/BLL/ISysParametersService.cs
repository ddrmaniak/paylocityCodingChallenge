using SalaryDeductions.Entities;

namespace SalaryDeductions.BLL
{
    public interface ISysParametersService
    {
        SysParameters Get();
        SysParameters Update(SysParameters parameters);
        DefaultParamsDTO GetDefaultParams();
    }
}