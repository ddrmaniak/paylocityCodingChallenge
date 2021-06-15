using SalaryDeductions.Entities;

namespace SalaryDeductions.DAL
{
    public interface ISysParametersProvider
    {
        SysParameters Get();
        void Update(SysParameters parameters);
    }
}