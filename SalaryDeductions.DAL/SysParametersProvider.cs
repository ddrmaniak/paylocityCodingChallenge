using System.Data.SqlClient;
using System.Linq;
using Dapper;
using SalaryDeductions.Entities;

namespace SalaryDeductions.DAL
{
    public class SysParametersProvider : ISysParametersProvider
    {
        private readonly string connectionString;
        public SysParametersProvider(string connectionString)
        {
            this.connectionString = connectionString;
        }

        public SysParameters Get()
        {
            SysParameters parameters = null;
            using (var connection = new SqlConnection(connectionString))
            {
                var rawresult = connection.Query<SysParameters>("select * from SysParameters");
                parameters = rawresult.AsList().FirstOrDefault();
            }
            return parameters;
        }

        public void Update(SysParameters parameters)
        {
            using (var connection = new SqlConnection(connectionString))
            {
                var sql = 
                    "update " +
                        "SysParameters " +
                    "set " +
                        "DefaultPaycheckAmount=@DefaultPaycheckAmount, " +
                        "DefaultPaycheckPerYear=@DefaultPaycheckPerYear, " +
                        "DiscountLetter=@DiscountLetter, " +
                        "DiscountAmountCoefficient=@DiscountAmountCoefficient, " +
                        "PrimaryDeductionAmount=@PrimaryDeductionAmount, " +
                        "DependentDeductionAmount=@DependentDeductionAmount " +
                    "where Id=@Id";
                var result = connection.Execute(sql, parameters);
            }
        }

        public DefaultParamsDTO GetDefaultParams()
        {
            DefaultParamsDTO parameters = null;
            using (var connection = new SqlConnection(connectionString))
            {
                var rawresult = connection.Query<DefaultParamsDTO>("select DefaultPaycheckAmount, DefaultPaycheckPerYear from SysParameters");
                parameters = rawresult.AsList().FirstOrDefault();
            }
            return parameters;
        }
    }
}
