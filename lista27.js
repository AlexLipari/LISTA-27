
class Funcionario{
Nome
Salario
}
class Gerente extends Funcionario{
    Departamento
    ExibirInformacoes(){
console.log(this.Nome,this.Salario,this.Departamento)
    }    
}
class Vendedor extends Funcionario{
    PercentualComissao
    CalcularSalario(){
let resultado = this.Salario + (this.Salario * (this.PercentualComissao / 100))
return resultado
    }
    ExibirInformacoesVendedora(){
console.log(this.Nome,this.Salario,this.PercentualComissao,this.CalcularSalario())
    }
}
let gerente = new Gerente()
gerente.Nome = "Alexandre"
gerente.Salario = 10000
gerente.Departamento = "Gerente Comercial"
gerente.ExibirInformacoes()

let vendedora = new Vendedor()
vendedora.Nome = "Bianca"
vendedora.Salario = 3000
vendedora. PercentualComissao = 8
vendedora.CalcularSalario()
vendedora.ExibirInformacoesVendedora()





