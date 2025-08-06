import React from "react";
import { Button } from "@/components/ui/button";
import { TrendingUp, Shield, PieChart, Smartphone } from "lucide-react";



function Hero(onGetStarted ) {
  return (
    <section className="bg-gradient-to-b from-accent to-background py-10">
      <div className="max-w-6xl mx-auto px-6">
        {/* Hero Content */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Manage your Money with{" "}
            <span className="text-primary">AI-Driven</span>
            <br />
            Personal Finance Advisor
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Take control of your financial future with intelligent insights, automated tracking, and personalized recommendations.
          </p>
          <Button 
            size="lg" 
            className="rounded-full px-8 py-6 text-lg bg-primary hover:bg-primary/90"
            onClick={onGetStarted}
          >
            Start Your Financial Journey
          </Button>
        </div>

        {/* Dashboard Preview */}
        <div className="bg-card rounded-2xl shadow-xl border p-8 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Balance Overview */}
            <div className="bg-primary rounded-xl p-6 text-primary-foreground">
              <h3 className="text-lg font-semibold mb-2">Total Balance</h3>
              <p className="text-3xl font-bold">$24,567.89</p>
              <p className="text-sm opacity-80 mt-2">+5.2% from last month</p>
            </div>
            
            {/* Expenses */}
            <div className="bg-accent rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-2 text-accent-foreground">Monthly Expenses</h3>
              <p className="text-3xl font-bold text-accent-foreground">$3,456.78</p>
              <p className="text-sm text-muted-foreground mt-2">-2.1% from last month</p>
            </div>
            
            {/* Savings Goal */}
            <div className="bg-success rounded-xl p-6 text-success-foreground">
              <h3 className="text-lg font-semibold mb-2">Savings Goal</h3>
              <p className="text-3xl font-bold">73%</p>
              <p className="text-sm opacity-80 mt-2">$7,300 of $10,000</p>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="bg-primary/10 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <TrendingUp className="h-8 w-8 text-primary" />
            </div>
            <h3 className="font-semibold mb-2">Smart Analytics</h3>
            <p className="text-muted-foreground text-sm">AI-powered insights into your spending patterns</p>
          </div>
          
          <div className="text-center">
            <div className="bg-primary/10 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Shield className="h-8 w-8 text-primary" />
            </div>
            <h3 className="font-semibold mb-2">Secure & Private</h3>
            <p className="text-muted-foreground text-sm">Bank-level security for your financial data</p>
          </div>
          
          <div className="text-center">
            <div className="bg-primary/10 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <PieChart className="h-8 w-8 text-primary" />
            </div>
            <h3 className="font-semibold mb-2">Budget Planning</h3>
            <p className="text-muted-foreground text-sm">Set goals and track your progress automatically</p>
          </div>
          
          <div className="text-center">
            <div className="bg-primary/10 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Smartphone className="h-8 w-8 text-primary" />
            </div>
            <h3 className="font-semibold mb-2">Mobile Ready</h3>
            <p className="text-muted-foreground text-sm">Access your finances anywhere, anytime</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;